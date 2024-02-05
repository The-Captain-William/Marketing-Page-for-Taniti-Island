console.log("hello world!");

// I can model the gallery as a class object
// Each image is an element in HTML, but also an attribute of the class (attribute in a class sense, not HTML sense)
// Each small image has an event listener attached
// The event listener will listen for a click
// the click will swap URLS if URLS are not already the same

class Gallery {

    constructor(galleryImagesContainerID) {

        // model the gallery container
        this.galleryImagesContainer = document.getElementById(galleryImagesContainerID);
        
        // generate an array of children
        this.galleryImagesArray = this.galleryImagesContainer.children;
        console.log(this.galleryImagesContainer, 'container');

        // select the main image and the small images in the doc
        for (let i = 0; i < this.galleryImagesArray.length; i++) {
            
            //define main image and add an ID to the page 
            let mainImageId = galleryImagesContainerID + '-main-image';
            if (i == 0) {
                this.galleryImagesArray[0].setAttribute('id', mainImageId);
                this.mainImage = this.galleryImagesArray[0];
            }
            // add an event listener to the smaller images
            this.galleryImagesArray[i].addEventListener('click', (e) => this.#swapImage(e));
        }

    }

    #swapImage(e) {
        
        console.log(e);

        /** 
         * 📝 Of course, you have to have a third variable to have a switcherooney
         * Note here because we've established e.target and mainImage are both live writeable elements, we are
         *  now switching their src attribute. 
        */
        if (e.target.src !== this.mainImage.src) {
        // grab main image pic url and save
        const mainImageCopy = this.mainImage.src;
        
        // grab clicked image url
        const clickedImageCopy = e.target.src;
        
        // make gallery src main src
        e.target.src = mainImageCopy;

        // make main src gallery
        this.mainImage.src = clickedImageCopy;
        }

    
    }

}

// Make sure the DOM is loaded before we start manipulating the web-page.
// This strat will work for any number of galleries on any web pages, irrespective of any # of images in a gallery.
// All you have to do is give the gallery an ID name and use it as a parameter when constructing a gallery object.
// The main gallery image view should be the first element.

document.addEventListener('DOMContentLoaded', () => {
    const galleryOne = new Gallery('galleryOne');
    const galleryTwo = new Gallery('galleryTwo');
    const galleryThree = new Gallery('galleryThree');
  });
