"use strict";

app.controller("BookCtrl", function ($scope, $q, $http) {

    $scope.getBookList = () => {
        console.log("Get book list running")
        return $q((resolve, reject) => {
            $http.get("../../data/guides.json")
            .success((data) => {
                $scope.books = data.guides;
                resolve(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }


})