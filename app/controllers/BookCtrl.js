"use strict";

app.controller("BookCtrl", function ($scope, GuideStorage) {

    $scope.books = []

    $scope.getBooksFromFactory = () => {
        GuideStorage.getBookList()
        .then(function (data) {
            $scope.books = data.guides
        })
    }

})