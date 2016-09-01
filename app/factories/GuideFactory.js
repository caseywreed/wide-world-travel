"use strict";

app.factory("GuideStorage", ($q, $http) => {

    let getBookList = () => {
        return $q((resolve, reject) => {
            $http.get("../../data/guides.json")
            .success((data) => {
                resolve(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }

return {getBookList}

})
