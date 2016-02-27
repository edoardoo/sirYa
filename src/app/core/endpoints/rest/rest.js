(function (angular, _) { 'use strict';

    /**
     * Rest service.
     */
  
    angular.module('sirya.core.endpoints.rest', [])
        .service('rest', function ($rootScope) {
            var rest = this;
            rest.getUserWithId = function( id ){
            	 
            	var users = { 

	            	69: {
	            		id: 69,
	            		type: "refugee",
	            		name: "Alwosdie",
	            		surname: "Roh",
	            		birthDate: "14/08/2005",
	            		birthPlace: "Aleppo,Syria",
	            		contacts: {
	            			telephone: "+355 0692713555",
	            			address: "Via di Novoli 6, Florence, Italy.",
	            			email: "AlwosdieRoh@gmail.it"
	            		},
	            		tags: [ "green eyes"],
	            		places: [
	            		{	
	            			name:"Aleppo, Syria",
	            			position:{
	            				lat: "36.202321",
	            				lng: "37.154141"
	            			},
	            			time:{
	            				start: "15/11/2014",
	            				end: "1/12/2014"
	            			}
	            		},{
	            			name:"Thesaloniki,Greece",
	            			position:{
	            				lat:"40.644767",
	            				long:"22.943280"
	            			},
	            			time:{
	            				start:"20/12/2014",
	            				end:"2/02/2015"
	            			}
	            		},{ 
	            			name:"Ljubljana,Slovenia",
	            			position:{
	            				lat: "46.046495",
	            				lng: "14.505310"
	            			},
	            			time:{
	            				start: "3/3/2015",
	            				end: "2/7/2015"
	            			}
	            		},{ 
	            			name:"Florence,Italy",
	            			position:{
	            				lat: "43.792588",
	            				lng: "11.230480"
	            			},
	            			time:{
	            				start: "3/7/2015",
	            				end: "2/12/2015"
	            			}
	            		}

	            		],
	            		urlImage: "http://www.moroccoworldnews.com/wp-content/themes/goodnews45/framework/scripts/timthumb.php?src=http://www.moroccoworldnews.com/wp-content/uploads/2014/01/Mona-liza.jpg&h=400&w=600&zc=1"
	            	}
            		
	            };
	            return users[id];
        	};
        	rest.getSearchesFromUserId = function( id ){
        		var searches = {
        			65: {
						user_id: 65,
						matched: [	//careful on what is an ARRAY and what is not.
							{
								search: {	
									id: 902,
									name: "Allah",
									surname: "Dalef",
									birthPlace: "Damascus,Syria",
									tags: [ "woodmaker"],
									places: [
										{
											name:"Amman,Palestine",
											position:{
												lat: "31.908817",
												lng: "35.952101"
											},
											time:{
												start: "15/10/2014",
												end: "1/11/2014"
											}
										}
									]
								},
								matches:[ 
									{	
										id: 66,
										dateOfMatch: "01/02/2016",
										name: "Allah",
										surname: "Dalef",
										birthDate: "22/1/2000",
										birthPlace: "Damascus,Syria",
										tags: [ "tattoo", "woodmaker"],
										places: [
											{
												name:"Damascus,Syria",
												position:{
													lat: "33.521195",
													lng: "36.300402"
												},
												time:{
													start: "15/10/2014",
													end: "1/11/2014"
												}
											},{
												name:"Ankara,Turkey",
												position:{
													lat: "39.9966035",
													lng: "32.8177151"
												},
												time:{
													start: "2/6/2015",
													end: "9/12/2015"
												}
											}
											
										],
										urlImage: "http://static01.mediaite.com/med/wp-content/uploads/2011/05/Picture-39.png"
									},{	
										id: 67,
										dateOfMatch: "02/02/2016",
										name: "Allah",
										surname: "Dalef",
										birthDate: "22/1/1999",
										birthPlace: "Damascus,Syria",
										tags: [ "tattoo", "woodmaker"],
										places: [
											{
												name:"Maaloula,Syria",
												position:{
													lat: "33.8508639",
													lng: "36.5177259"
												},
												time:{
													start: "15/10/2014",
													end: "1/11/2014"
												}
											},{
												name:"Ankara,Turkey",
												position:{
													lat: "39.9966035",
													lng: "32.8177151"
												},
												time:{
													start: "2/6/2015",
													end: "9/12/2015"
												}
											}
											
										],
										urlImage: "http://static01.mediaite.com/med/wp-content/uploads/2011/05/Picture-39.png"
									},{	
										id: 68,
										dateOfMatch: "01/02/2016",
										name: "Alllah",
										surname: "Dalef",
										birthDate: "22/1/1980",
										birthPlace: "Damascus,Syria",
										tags: [ "tattoo", "woodmaker"],
										places: [
											{
												name:"Jabadeen,Syria",
												position:{
													lat: "33.8508639",
													lng: "36.5177259"
												},
												time:{
													start: "15/10/2014",
													end: "1/11/2014"
												}
											}
											
										],
										urlImage: "http://static01.mediaite.com/med/wp-content/uploads/2011/05/Picture-39.png"
									}
								]
							}

						],
						pending: [ 
							
								 {	
									id: 903,
									name: "Rafik",
									surname: "Dalef",
									birthPlace: "Damascus,Syria",
									tags: [ "farmer"],
									places: [
										{
											name:"Al Qisa,Syria",
											position:{
												lat: "33.491975",
												lng: "36.600324"
											},
											time:{
												start: "15/10/2014",
												end: "1/11/2014"
											}
										}
									]
								}
						],

					},
					69: {
						user_id: 69,
						matched: [	//careful on what is an ARRAY and what is not.
							{
								search: {	
									id: 355,
									name: "Bisan",
									surname: "Roh",
									birthPlace: "Aleppo",
									tags: [ "engineer"],
									places: [
										{
											name:"Pisa,Italy",
											position:{
												lat: "43.711558",
												lng: "10.402228"
											},
											time:{
												start: "15/10/2015",
												end: "1/11/2015"
											}
										}

										
									],
									urlImage: "http://www.myrecordjournal.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=ixC5$x_L_NhwA$mFZAHjYM$daE2N3K4ZzOUsqbU5sYuOzSLkziTsftbKhJM5pcjEWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg"
								},
								matches:[ 
									{	
										id: 663,
										dateOfMatch: "01/02/2016",
										name: "Bisan",
										surname: "Roh",
										birthDate: "22/1/1968",
										birthPlace: "Aleppo",
										tags: [ "engineer", "mechanical"],
										places: [
											{
												name:"Dresden,Germany",
												position:{
													lat: "51.047133",
													lng: "13.772179"
												},
												time:{
													start: "15/10/2014",
													end: "1/11/2014"
												}
											},{
												name:"Leipzig,Germany",
												position:{
													lat: "51.285565",
													lng: "12.345777"
												},
												time:{
													start: "2/6/2015",
													end: "9/12/2015"
												}
											}
											
										],
										urlImage: "http://www.wazala.org/photos/Syria/Syrian_Man~medium.jpg"
									},
									{	
										id: 9665,
										dateOfMatch: "02/02/2016",
										name: "Bisan",
										surname: "Roh",
										birthDate: "22/1/1999",
										birthPlace: "Damascus",
										tags: [ "scars", "carpenter"],
										places: [
											{
												name:"Szarvas,Hungary",
												position:{
													lat: "46.8508639",
													lng: "20.5177259"
												},
												time:{
													start: "14/6/2015",
													end: "1/8/2015"
												}
									},
											
										],
										urlImage: "https://vice-images.vice.com/images/articles/crops/2015/10/01/canada-doing-everything-it-can-to-make-it-difficult-for-syrian-refugees-to-come-here-1443719935-crop_mobile.jpg?resize=*:*&output-quality=75"
									},
									{	
										id: 758,
										dateOfMatch: "02/02/2016",
										name: "BisanI",
										surname: "Roh",
										birthDate: "22/1/1974",
										birthPlace: "Aleppo",
										tags: ["engineer"],
										places: [
											{
												name:"Maaloula,Syria",
												position:{
													lat: "33.8508639",
													lng: "36.5177259"
												},
												time:{
													start: "15/6/2014",
													end: "16/6/2014"
												}
											}
											
												],
										urlImage: "http://www.myrecordjournal.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=ixC5$x_L_NhwA$mFZAHjYM$daE2N3K4ZzOUsqbU5sYuOzSLkziTsftbKhJM5pcjEWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg"
									},
								]
							},
							{
								search: {	
									id: 451,
									name: "Mehdie",
									surname: "Hodaei",
									birthPlace: "Aleppo,Syria",
									tags: [ "paintress"],
									places: [
										{
											name:"Dresden,Germany",
											position:{
												lat: "51.047133",
												lng: "13.772179"
											},
											time:{
												start: "15/10/2015",
												end: "1/11/2015"
											}
										}
									]
								},
								matches:[ 
									{	
										id: 458,
										dateOfMatch: "07/02/2016",
										name: "Mehdie",
										surname: "Hodaei",
										birthDate: "22/1/1980",
										birthPlace: "Aleppo,Syria",
										tags: [ "paintress","actress"],
										places: [
											{
												name:"Dresden,Germany",
												position:{
													lat: "51.047133",
													lng: "13.772179"
												},
												time:{
													start: "15/10/2014",
													end: "1/11/2014"
												}
											},{
												name:"Leipzig,Germany",
												position:{
													lat: "51.285565",
													lng: "12.345777"
												},
												time:{
													start: "2/6/2015",
													end: "9/12/2015"
												}
											}
											
										],
										urlImage: "https://qph.is.quoracdn.net/main-qimg-58fb3599f8e081c8481bf8e078ef204d?convert_to_webp=true"
									},
									{	
										id: 9265,
										dateOfMatch: "06/02/2016",
										name: "Mehdie",
										surname: "Hodaei",
										birthDate: "22/1/1985",
										birthPlace: "Damascus,Syria",
										tags: [ "fermer"],
										places: [
											{
												name:"Szarvas,Hungary",
												position:{
													lat: "46.8508639",
													lng: "20.5177259"
												},
												time:{
													start: "14/6/2015",
													end: "1/8/2015"
												}
									},
											
										],
										urlImage: "http://assets.vice.com/content-images/contentimage/142099/JHY-8-03-14---A-13.jpg"
									}
								]
							}

						],
		 				pending: [ 
					
						 {	
							id: 903,
							name: "Esat",
							surname: "Roh",
							birthPlace: "Damascus",
							tags: [ "farmer"],
							places: [
								{
									name:"Warsaw,Polonia",
									position:{
										lat: "52.145244",
										lng: "21.073751"
									},
									time:{
										start: "15/10/2014",
										end: "1/11/2014"
									}
								},
								{
									name:"Poznan,Polonia",
									position:{
										lat: "52.336456",
										lng: "16.942991"
									},
									time:{
										start: "20/11/2014",
										end: "1/12/2014"
									}
								}

							]
						},
						 {	
							id: 1023,
							name: "Moulud",
							surname: "Shahivari",
							birthPlace: "Lebanon",
							tags: [ "architect"],
							places: [
								{
									name:"Zadar,Croatia",
									position:{
										lat: "44.091465",
										lng: " 15.357000"
									},
									time:{
										start: "3/03/2015",
										end: "7/03/2015"
									}
								},
								{
									name:"Rijeka,Croatia",
									position:{
										lat: "45.330370",
										lng: "14.476979"
									},
									time:{
										start: "10/03/2014",
										end: "15/03//2014"
									}
								}
							]
						},
						 {	
							id: 256,
							name: "Arya",
							surname: "Miryekta",
							birthPlace: "Tehran",
							tags: [ "architect"],
							places: [
								{
									name:"Bari,Italy",
									position:{
										lat: "41.039427",
										lng: "16.718190"
									},
									time:{
										start: "18/09/2014",
										end: "1/10/2014"
									}
								},
								{
									name:"Florence,Italy",
									position:{
										lat: "43.782911",
										lng: "11.239249"
									},
									time:{
										start: "13/10/2014",
										end: "4/11//2014"
									}
								},
								{
									name:"Turin,Italy",
									position:{
										lat: "45.069588",
										lng: "7.671141"
									},
									time:{
										start: "16/11/2014",
										end: "7/12//2014"
									}
								}
							]
						}

						],

					},
					145: {
						user_id: 145,
						matched: [	//careful on what is an ARRAY and what is not.
							{
								search: {	
									id: 58,
									name: "Elsion",
									surname: "Sulejmani",
									birthPlace: "Aleppo",
									tags: [ "pictor"],
									places: [
										{
											name:"Hanover,Germany",
											position:{
													lat: "52.385453",
													lng: "9.733478"
												},
											time:{
													start: "3/10/2014",
													end: "7/10/2014"
												}
										}
									]
								},
								matches:[ 
									{	
										id:144 ,
										dateOfMatch: "01/02/2015",
										name: "Elsion",
										surname: "Sulejmani",
										birthDate: "28/2/1989",
										birthPlace: "Aleppo",
										tags: [ "pictor", "Deejay"],
										places: [
											{
												name:"Hanover,Germany",
												position:{
													lat: "52.385453",
													lng: "9.733478"
												},
												time:{
													start: "3/10/2014",
													end: "7/10/2014"
												}
											},{
												name:"Stuttgart,Germany",
												position:{
													lat: "48.794213",
													lng: "9.190896"
												},
												time:{
													start: "1/11/2014",
													end: "9/11/2014"
												}
											}
											
										],
										urlImage: "http://api.ning.com/files/DtcI2O2Ry7AvX-B8xD-ilJDw*jUzr6RWhfn4DnshfPClr4g*I18Z6QJOTQl4CMdtShwQnETLivWZJmyu5BTZuuGPwcWaM8Dr/1082135390.jpeg"
									},{	
										id: 765,
										dateOfMatch: "02/02/2015",
										name: "Elsion",
										surname: "Sulejmani",
										birthDate: "22/1/2004",
										birthPlace: "Damascus",
										tags: [ "scars", "carpenter"],
										places: [
											{
												name:"Budapest,Hungary",
												position:{
													lat: "47.476859",
													lng: "19.072605"
												},
												time:{
													start: "14/6/2015",
													end: "1/8/2015"
												}
											},
											
										],
										urlImage: "http://cdn1.pri.org/sites/default/files/story/images/MKCoursin_PRI106.jpg"
									}
								]
							}

						],
						pending: [ 
					
							{	
								id: 875,
								name: "Moulud",
								surname: "Sulejmani",
								birthPlace: "Aleppo",
								tags: [ "translator"],
								places: [
									{
										name:"Aleppo,Syria",
										position:{
											lat: "36.195657",
											lng: "37.142696"
										},
										time:{
											start: "15/7/2014",
											end: "25/7/2014"
										}
									}
								]
							}
						],

					}
				};

				return searches[id];
        	} 
        });
	
})(window.angular, window._);
