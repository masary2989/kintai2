myapp.controller('NameController', function($scope, $http) {
    $scope.resultajax
    $scope.inputname
    
    
    ons.ready(function() {
        console.log("NameController is ready!");

        var parameter = {
                        Employee_ID:"1",
        }
        console.log("start ajax!")
        
         $http({
             method: 'POST',
               url:"https://labo.ef-4.co.jp/deepblue/kintaiApp/profile_call_name/",
               data:{
                        "Employee_ID":"1",
        }
               }
          ).
          success(function(data) {
             console.log(data); 
             //console.log(status);
             //console.log(headers);
             console.log("ajax successed"); 
             $scope.resultajax="success";
             console.log(data.Namae);
             $scope.preusername = data.Namae
          }).
          error(function(data, status, headers, config) {
             console.log(status);
             console.log(data);
             console.log(headers);
             console.log("ajax failed");
             $scope.resultajax="failed";
          });
    });
    
    
    
    this.click = function(){
        console.log("inputname = " + $scope.inputname);
        var inputname = $scope.inputname
        $http({
             method: 'POST',
               url:"https://labo.ef-4.co.jp/deepblue/kintaiApp/profile_sub_name/",
               data:{
                        "Employee_ID":"1","Profile_Data_Name_Changed":inputname
        }
               }
          ).
          success(function(data) {
             console.log(data); 
             //console.log(status);
             //console.log(headers);
             console.log("ajax successed"); 
             console.log(data);
          }).
          error(function(data, status, headers, config) {
             console.log(status);
             console.log(data);
             console.log(headers);
             console.log("ajax failed");
             $scope.resultajax="failed";
          });
    };
    
});


//console.log("NameController is ready!");