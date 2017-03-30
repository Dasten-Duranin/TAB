window.addEventListener("load",init,false); /*Ne pas exectuer code tant que page non chargée */

function init ()
{
	counter = 0;

	$('#infoCaro').modal('show');
	initLightBoxes();

	$('#firstClose').click(function() {
		$(this).css('display', 'none');
		$("#close").css('display', 'block');
		$("body").animate({
			"backgroundPositionX": "+=5%"
		}, {
			duration: 12000,
			complete: function() {
				counter++;

				if (step[counter]) {
					step[counter].show();
				}
			},
		});
		$("#nuage").animate({
			"backgroundPositionX": "+=7%"
		}, 7000);
	});

	$('#caroRun').on('click', function() {
		$('#infoCaro').modal('show');
	});

    $('#run').on('click', function() {
		forward(function() {
			counter++;

			step[counter].show();
		});
	});

    $('.nextStep').on('click', function() {
		if (step[counter]) {
			step[counter].hide();
		}

		forward(function() {
			counter++;

			if (step[counter]) {
				step[counter].show();
			}
		});
	});

    $('.toFinalStep').on('click', function() {
		step[counter].hide();
		forward(function() {
			$("#caroRun").addClass('moving');
			var audio = new Audio('audio/foule.mp3');
			audio.play();
			setTimeout(function() {
				$("#caroRun").css('animation-play-state', 'paused');
				$('#infoFinal').modal('show');
			}, 7000);
		});
	});
}

function initLightBoxes ()
{
	step = {};
	step[1] = new LightBox({
		name: 'step1',
		contents: {
			cultural: '<p>Vous passez devant le musée des Beaux Arts, qui, édifié au XV°s, s’est installé en 1796 dans le Logis Barrault. On vous voit venir, mais qu’est-ce que Le Logis Barrault ? L\'hôtel particulier, reste l’un des lieux les plus anciens de la ville et est classé Monument Historique.</p>'+
					'<p>Le musée des Beaux Arts a ouvert ses portes pour la toute première fois en 1805 en tant que musée municipal et il nous offre près de 3 000m² d’expositions.</p>',
			facts: '<p>Le trail de la Cité en 2016, c\’est :</p>'+
					'<ul>'+
						'<li>1 doyen de 81 ans qui a participé</li>'+
						'<li>2000 tweets</li>'+
						'<li>18 000 personnes</li>'+
						'<li>76 km de trail</li>'+
						'<li>97 associations sportives</li>'+
					'</ul>'+
					'<p>N’oublie pas que cette course est aussi culturelle. Profites-en pour découvrir des nouvelles choses.</p>',
			title: 'Tu es arrivée au musée des Beaux Arts',
			footer: '<button type="button" class="btn btn-default btn-sm nextStep">Prochaine étape</button>',
		},
	});

	step[2] = new LightBox({
		name: 'step2',
		contents: {
			cultural: '<p>Le jardin qui vous fait face s’appelle le jardin des plantes. Qu’a-t-il de si particulier ? Il est tout simplement le tout premier jardin botanique angevin installé au 18°s. Placé au-delà des remparts du château, le jardin a été créé dans l’esprit anglais.</p>'+
					'<p>Aujourd’hui, le jardin des plantes offre 4 hectares d’espaces verts avec plus de 59 000 plantes, pour le bonheur des visiteurs, et en cette occasion, pour le votre !</p>',
			facts: '<p>Ceux qui ne viennent pas courir :</p>'+
					'<ul>'+
						'<li>Ils n’aiment pas se trouver au contact des gens</li>'+
						'<li>Ils n’aiment pas Angers</li>'+
						'<li>Ils n’aiment pas rire et ne sont pas fun</li>'+
						'<li>Ils préfèrent aller à la messe</li>'+
						'<li>Ils préfèrent les repas interminables du dimanche</li>'+
					'</ul>'+
					'<p>Alors positive, tu es quelqu’un de bien !</p>',
			title: 'Tu es arrivée au jardin des plantes',
			footer: '<button type="button" class="btn btn-default btn-sm nextStep">Prochaine étape</button>',
		},
	});

	step[3] = new LightBox({
		name: 'step3',
		contents: {
			cultural: '<p>La chapelle que vous apercevez est la partie la plus prestigieuse du CHU. Vous pouvez vous rendre compte à quel point la façade en impose, puisqu\'elle est composée d’un portique à l’antique et surmontée d’un dôme baroque. Pour vous y rendre, l’allée centrale est votre amie.</p>'+
					'<p>En 2002, la chapelle connaît une nouvelle fonction d’accueil et d’orientation des usagers.</p>',
			facts: '<p>Le code d’honneur du coureur :</p>'+
					'<ul>'+
						'<li>Dans la rue, les autres coureurs tu salueras</li>'+
						'<li>Ton partenaire d’entraînement tu respecteras</li>'+
						'<li>Sur tes temps de course honnête tu seras</li>'+
						'<li>Les débutants tu aideras</li>'+
						'<li>Respectueux des bénévoles tu seras</li>'+
					'</ul>'+
					'<p>Tu es à la moitié de la course, n’abandonne pas maintenant !</p>'+
					'<p>Et regarde ta montre, ta moyenne est de 10,7 km/h, tu es dans les temps, continue comme ça pour atteindre ton objectif !</p>',
			title: 'Tu es arrivé à la chapelle du CHU',
			footer: '<button type="button" class="btn btn-default btn-sm nextStep">Prochaine étape</button>',
		},
	});

	step[4] = new LightBox({
		name: 'step4',
		contents: {
			cultural: '<p>Les nombreuses marches que vous vous apprêtez à monter (en courant toujours, courage!) n’ont pas toujours été ainsi. Sous l\'Ancien Régime, la montée Saint-Maurice n\'était qu\'une ruelle escarpée et tortueuse, montant de la rue Baudrière à la cathédrale.</p>'+
					'<p>A la fin des années 1970, la montée Saint-Maurice s\'achevait sur une esplanade aménagée en jardin avec un grand bassin circulaire dans l\'axe de la cathédrale, inaugurée en 1986.</p>',
			facts: '<p>Si tu réalises ta performance, tes muscles seront considérablement renforcés ! Sans compter ce que vont t’apporter ces 103 marches de la montée St-Maurice... Aussi, ce n’est pas moins de 500 à 600 calories dépensées au total à la fin ! Ton corps puise dans ses ressources, alors n’hésite surtout pas à bien t’hydrater.</p>'+
					'<p>Et si ça peut t’aider, pense au bon repas qui t’attend...</p>',
			title: 'Tu es arrivé à la montée Saint-Maurice',
			footer: '<button type="button" class="btn btn-default btn-sm nextStep">Prochaine étape</button>',
		},
	});

	step[5] = new LightBox({
		name: 'step5',
		contents: {
			cultural: '<p>Comment passer à côté du château sans poser son regard sur lui ? Dominant la Maine, cette forteresse érigée sur un promontoire rocheux a été construite sous la régence de Blanche de Castille au XIIIe siècle.</p>'+
					'<p>Au XXe siècle, il est transformé en prison, puis en garnison et dépôt de munition pendant la Seconde Guerre mondiale. Enfin, au début du XXIe siècle, il héberge la tenture de l\'Apocalypse, tapisserie renommée. Il demeure l’un des sites touristiques les plus visités du Maine-et-Loire.</p>',
			facts: '<p>« En jogging, il n\'y a pas d\'importance si vous arrivez en premier, dans le milieu du peloton, ou en dernier. Vous pouvez dire : « J\'ai fini. » Il y a beaucoup de satisfaction à cet égard. »<br>- Fred Lebow, cofondateur du marathon de New York</p>'+
					'<p>« Demandez-vous : « Puis-je en donner plus ? » La réponse est généralement : « Oui ».<br>- Paul Tergat , marathonien professionnel du Kenya</p>'+
					'<p>1863 : Deerfoot, un Indien nord-américain, a battu le record du monde de l’heure en course à pied, à 90 ans, en mocassins, alors qu’il ne s\'entraînait pas !</p>'+
					'<p>Tout est dans le mental, c’est la fin. Prends-toi pour une princesse et termine la course royalement ! </p>',
			title: 'Tu es arrivé au château d\'Angers',
			footer: '<button type="button" class="btn btn-default btn-sm toFinalStep">Prochaine étape</button>',
		},
	});
}
function forward(callback)
{
    $("body").animate({
      "backgroundPositionX": "+=18%"
    }, {
		duration: 10000,
		complete: callback,
	});

	$("#nuage").animate({
		"backgroundPositionX": "+=20%"
	}, 7000);
}
