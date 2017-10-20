angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
    mainSrvc.getPackageInfo().then( function( res ) {
        $scope.allPackages = res.data;

        // find the package object with the id that matches the id on $stateParams
        // assign it to a new $scope variable called package 
        if ( $stateParams.id ) {
            $scope.packageIndex = $scope.allPackages.findIndex( function( package ) {
                return package.id === parseInt( $stateParams.id );
            });

            if ( $scope.packageIndex !== -1 ) {
                $scope.package = $scope.allPackages[ $scope.packageIndex ];
            }
        };
    })
});