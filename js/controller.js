app.controller("tjsyCtrl",function($scope,$http,$rootScope){
	$http.get("data/data.json").success(function(data){
		$scope.tjsy = data.tjgame;
		$scope.jdyx = data.jdgame;
		$scope.azdj = data.andjgame;
		$scope.yxtj = data.detail;
		$scope.azwy = data.azwy;
		$scope.yydq = data.yydq;
	})
	$scope.detail = function(img,name,rq,dx,pf,gx,people,bb){
		$rootScope.img = img;
		$rootScope.name = name;
		$rootScope.rq = rq;
		$rootScope.dx = dx;
		$rootScope.pf = pf;
		$rootScope.gx = gx;
		$rootScope.people = people;
		$rootScope.bb = bb;
		$(document).scrollTop(0);
	}
})
.controller("newsCtrl",function($scope,$http,$rootScope){
	$http.get("data/data.json").success(function(data){
		$scope.strategy1 = [data.strategy[0],data.strategy[1]];
		$scope.news1 = [data.news[0],data.news[1]];
		$scope.strategy = data.strategy;
		$scope.news = data.news;
	})
	$scope.details = function(title,imgs,content){
		$rootScope.title = title;
		$rootScope.imgs = imgs;
		$rootScope.content = content;
	}
})