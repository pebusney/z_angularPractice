var myCSSModule=angular.module('MyCSSModule',[]);
myCSSModule.controller('CSSCtrl',['$scope',
	function($scope){
		$scope.color = "red";
		$scope.setGreen = function(){//并没有直接操作标签
			$scope.color = "green";
		}
	}
])