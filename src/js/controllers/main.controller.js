function MainController ($scope) {

   
  $scope.bumpCount = function (count) {
    
    if (count === 0) {
      return count + ' Likes';
    } else if (count === 1) {
      return count + ' Like'
    } else if (count >= 2) {
      return count + ' Likes'
    }
  }


}

MainController.$inject = ['$scope']
export { MainController };