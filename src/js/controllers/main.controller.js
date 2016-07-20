function MainController ($scope) {
 
  $scope.count = 0;
  $scope.text  = 'Likes';

  $scope.bumpCount = () => {
    $scope.count ++;
    $scope.text = ($scope.count === 1) ? "Like" : "Likes";

  }

    

  //   if (count === 0) {
  //     return count + ' Likes';
  //   } else if (count === 1) {
  //     return count + ' Like'
  //   } else if (count >= 2) {
  //     return count + ' Likes'
  //   }
  // }


}

MainController.$inject = ['$scope'];
export { MainController };