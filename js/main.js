$(function () {
	

	
	
	// let gnbList = document.querySelector('.gnb-List');
	// let mGnb = document.querySelector('.mobile-gnb');
	
	$('.header').on({
		mouseenter: function () {
			$('.gnb-List').addClass('active');
			$(this).addClass('active');
		},
		mouseleave: function () {
			$('.gnb-List').removeClass('active');
			$(this).removeClass('active');
		},
	});
	
	// $(".header").mouseenter(function () {
	//
	//
	// });
	//
	// $(".header").mouseleave(function () {
	//
	// });
	
	$(".menu-mobile").click(function () {
		$('.mobile-gnb').toggleClass('active');
		// mGnb.classList.toggle('active');
	});
	// 헤더
	
	
	// let frame = document.querySelector('.ListFrame');
	// let SiteList = document.querySelector('.familySite-List');
	// let rotate = document.querySelector('.familySite i');
	
	$('.familySite').click(function () {
		$('.ListFrame').toggleClass('active');
		$('.familySite-List').toggleClass('active');
		$('.familySite i').toggleClass('active');
		
		// SiteList.classList.toggle('active');
		// rotate.classList.toggle('active');
		// frame.classList.toggle('active');
	});
	//패밀리사이트
	
	
	
	$('.game-slide').slick({
		dots: false, //네이베이션 사용여부
		arrows: true, //화살표 사용여부
		prevArrow: $('.games-leftBtn'), //이전 화살표
		nextArrow: $('.games-rightBtn'), //다음 화살표
		autoplay: false, //자동넘김
		autoplaySpeed: 5000, //자동넘김 속도
		pauseOnHover: false, //마우스 오버시 자동재생 멈춤
		fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
		speed: 400, // 슬라이드 속도
		infinite: false, // 무한슬라이드
		centerMode: true,
		centerPadding: '10%',
		
		slidesToShow: 2, //보여질 슬라이드 갯수
		slidesToScroll: 1, //넘겨질 슬라이드 갯수
		
		responsive: [ //반응형 적용여부
			{
				breakpoint: 1024, //해상도 브레이크 포인트 설정
				settings: {
					centerPadding: '5%',
					slidesToShow: 2,
					slidesToScroll: 1,
					
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
		
		
	});
});
// 슬라이드



// scroll event
$(function () {
	
	// scrollTop() : 함수는 스크롤 위치를 위쪽으로 부터 수치화 시켜줄때 사용
	// offset() : 함수는 해당 객체의 수치정보를 알아볼때 주로 사용
	// offset() 함수를 console 창에 확인해 볼 경우 left, top 이 출력
	// left 는 Document 에서 왼쪽으로 얼만큼 위치해있는지
	// top 도 마찬가지로 위쪽에서 얼만큼 위치해있는지 수치 정보를 담고 있습니다.
	
	const secGames = $('.games').offset().top;
	const secCommunity = $('.community').offset().top;
	const secMain = $('.header').offset().top;
	
	
	
	// console.log($('.games').offset().top);
	
	$(window).scroll(function () {
		
		
		const scrollTop = $(this).scrollTop();
		let prevPos = 0;
		
		// $('.pos').text(scrollTop);
		if (scrollTop <= prevPos){
			$('.header').css('opacity','1');
		} else {
			$('.header').css('opacity','0');
		}
		prevPos = scrollTop;
		
		if (scrollTop >= secGames - window.innerHeight * 0.5 ) {
			$('html,body').css('background', 'black');
		} else {
			$('html,body').css('background', 'white');
		}
		
		if (scrollTop >= secCommunity - window.innerHeight * 0.5) {
			$('.community').css('background', 'white');
		} else {
			$('.community').css('background', 'black');
		}
		
		
	});
	
	
	
	
	
	
	
});






