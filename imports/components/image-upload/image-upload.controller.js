import angularMeteor from 'angular-meteor';

export class ImageUploadController {
  constructor($scope, $reactive, $element, $q, $rootScope) {
    'ngInject';

    this.$element = $element;
    this.$q = $q;
    this.$rootScope = $rootScope;

    $reactive(this).attach($scope);

    this.helpers({
      image() {
        return this.image;
      },
      draggingOver() {
        return this.draggingOver;
      },
      draggingError() {
        return this.draggingError;
      }
    });

    this.offImageReset = this.$rootScope.$on('image-upload:image:reset', () => this.onImageReset())
  }

  $postLink() {
    const input = this.$element.find('input');
    const box = this.$element.find('.box');

    box
      .on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
      })
      .on('dragover dragenter', (e) => {
        this.draggingOver = true;
        this.draggingError = false;
      })
      .on('dragleave dragend drop', () => {
        this.draggingOver = false;
      })
      .on('drop', (e) => {
        let file = e.originalEvent.dataTransfer.files[0];
        if(file.type.indexOf('image') === -1) {
          this.draggingError = true;
          this.image = null;
        } else {
          this.draggingError = false;
          this.image = file;
          this.getBase64(this.image).then((base64) => {
            this.image.base64 = base64
            this.notifyImageChange(base64)
          });
        }
      });

    input.on('change', (e) => {
      this.image = input[0].files[0];
      this.getBase64(this.image).then((base64) => {
        this.image.base64 = base64
        this.notifyImageChange(base64)
      });
    });
  }

  getBase64(image) {
    let deferred = this.$q.defer();
    
    var fileReader = new FileReader();
    fileReader.onload = (fileLoadedEvent) => {
      deferred.resolve(fileLoadedEvent.target.result);
    }
    fileReader.readAsDataURL(image);

    return deferred.promise;
  }

  notifyImageChange(base64) {
    this.$rootScope.$emit('image-upload:image:changed', base64);
  }

  onImageReset() {
    this.image = null;
  }

  $onDestroy() {
    this.offImageReset();
  }
}