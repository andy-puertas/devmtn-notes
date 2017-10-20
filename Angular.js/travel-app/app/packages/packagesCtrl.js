angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {
    mainSrvc.getPackageInfo().then( function( res ) {
        $scope.allPackages = res.data;

        // filter out packages that equal the country specified in URL
        // put into a new $scope variable called packages
        if ( $stateParams.country ) {
            $scope.packages = $scope.allPackages.filter( function( package ) {
                return package.country === $stateParams.country;
            });
        }
    })
});