angular.module('noterious')
	.directive('simpleBoard',function(){
		var controller = function(){
			var ctrl = this;

			ctrl.sayHello = function(){
				console.log("Hello");
			}
		}

		var linker = function(scope,element, attrs){
			$(element).hover(
				function(){
					$(this).css('opacity',0.5);
					scope.simpleBoard.sayHello();
				},function(){
					$(this).css('opacity',1.0);
				}
			);
		}

		return {
			templateUrl: 'app/boards/simple-board.tmpl.html',
			replace: true,
			controller: controller,
			controllerAs: 'simpleBoard',
			link: linker
		}
	});
