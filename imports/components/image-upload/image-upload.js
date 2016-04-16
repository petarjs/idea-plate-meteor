import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './image-upload.html';
import { ImageUploadController } from './image-upload.controller';

const name = 'image-upload';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component('imageUpload', {
  templateUrl: `imports/components/${name}/${name}.html`,
  controllerAs: 'imageUpload',
  bindings: {
    
  },
  controller: ImageUploadController,
  $postLink($element) {
    var inputs = $element.find( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
      var label  = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener( 'change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
          label.querySelector( 'span' ).innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });
  }
});