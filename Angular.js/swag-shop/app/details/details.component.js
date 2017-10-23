angular.module('swagShop').component('detailsComponent', {
    templateUrl: 'app/details/details.template.html',
    controllerAs: 'detailsCtrl',

    // controller function
    controller: function( $stateParams, swagSrvc, cartSrvc ) {
        // assign an array called swag that equals the swag array in the swag service
        this.swag = swagSrvc.swag;

        // assign an object called item that equals the swag object with the same id as the id in the URL
        if ( $stateParams.id ) {
            let itemIndex = this.swag.findIndex( item => item.id === $stateParams.id );
            this.item = this.swag[ itemIndex ];
        };

        // assign a method that takes an item param and uses it to call the add method on the cart service
        this.addToCart = function( item ) {
            cartSrvc.add( item );
            console.log( cartSrvc.currentCart() );
        };
    }
});