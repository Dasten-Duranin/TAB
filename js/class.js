//Attributes
function LightBox(obj) {
    this.lightBoxesId        = 'lightBoxes';
    this.lightBoxesContainer = null;

    this.name      = null;
    this.overlayId = null;
	this.overlay   = null;

	this.container      = null;
	this.header         = null;
	this.frame          = {};
	this.frame.selected = 'facts';
	this.contents       = null;

	this.init(obj);
};
//Non-statics methods
LightBox.prototype = {
    init: function (obj) 
    {
		//Set properties
        for (var fld in obj) {
            if (obj.hasOwnProperty(fld)) {
                this[fld] = obj[fld];
            }
        }

		//Container of lightBoxes
		if ($('#'+this.lightBoxesId).length) {
			this.lightBoxesContainer = $('#'+this.lightBoxesId);
		} else {
			this.lightBoxesContainer = $('<div id="'+this.lightBoxesId+'"></div>');
			$('body').append(this.lightBoxesContainer);
		}

		//Overlay of lightBox
		var otherBoxes   = $('.overlay', this.lightBoxesContainer),
			nbLightBoxes = otherBoxes.length

		this.overlayId = 'lightBox-';
			if (this.name && this.name != '') {
			this.overlayId += this.name;
		} else {
			this.overlayId += nbLightBoxes;
		}

		if (otherBoxes != 0) {
			otherBoxes.hide();
		}

		this.overlay = $('<div class="overlay" id="'+this.overlayId+'"></div>');
		this.lightBoxesContainer.append(this.overlay);

		//Container of lightBox
		this.container = $('<div class="container"></div>');
		this.overlay.append(this.container);

		//set header
		this.header = $('<div class="header"><span class="cultural tab">Informations Culturelles</span><span class="separator"></span><span class="facts tab selected">Informations Diverses</span></div>');
		this.container.append(this.header);


		//set Facts frame
		this.frame.facts = $('<div></div>');
		this.frame.facts.append($(this.contents.facts));

		this.container.append($(this.frame.facts));

		//set Cultural frame
		this.frame.cultural = $('<div></div>');
		this.frame.cultural.append($(this.contents.cultural));

		this.container.append($(this.frame.cultural));

		this.selectContent(this.frame.selected);

		//set custom Content (button next step for us)
		this.frame.custom = $('<div class="custom"></div>');
		this.frame.custom.append($(this.contents.custom));

		this.container.append($(this.frame.custom));

		//handle click events on tabs
		var object = this;

		$('.tab', this.header).click(function() {
			var classes = $(this).attr('class').split(' ');
			$.each(classes, function(index, value) {
				if (value != 'tab' && value != 'selected') {
					object.selectContent(value);
				}
			});
		});
    },
	selectContent: function(content)
	{
		$('.tab', this.header).removeClass('selected');
		$('.tab.'+content, this.header).addClass('selected');

		this.frame.cultural.hide();
		this.frame.facts.hide();
		this.frame[content].show();
	},
	show: function()
	{
		this.overlay.show();

		//set the frames height
		if (this.frame.facts.height() > this.frame.cultural.height()) {
			this.frame.cultural.height(this.frame.facts.height());
		} else {
			this.frame.facts.height(this.frame.cultural.height());
		}
	},
	hide: function()
	{
		this.overlay.hide();
	},
};


//Statics methods
/*
User.login = function(email, password, callback)
{ 
}
*/
