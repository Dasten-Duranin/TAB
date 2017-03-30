//Attributes
function LightBox(obj) {
    this.lightBoxesId        = 'lightBoxes';
    this.lightBoxesContainer = null;

    this.name      = null;
    this.overlayId = null;
	this.overlay   = null;

	this.container      = null;
	this.header         = null;
	this.body           = null;
	this.footer         = null;
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

		this.overlay = $('<div class="overlay modal fade" id="'+this.overlayId+'" tabindex="-1" role="dialog"></div>');
		this.lightBoxesContainer.append(this.overlay);

		var modalDocument = $('<div class="modal-dialog modal-lg" role="document"></div>');
		this.overlay.append(modalDocument);

		//Container of lightBox
		this.container = $('<div class="modal-content"></div>');
		modalDocument.append(this.container);

		//set header
		this.header = $('<div class="modal-header"><h3>'+this.contents.title+'</h3><p>Motive Caroline par :</p><button type="button" class="btn btn-default btn-sm cultural tab">Informations Culturelles</button><button type="button" class="btn btn-default btn-sm facts tab">Informations Ludique</button></div>');
		this.container.append(this.header);

		//set body 
		this.body = $('<div class="modal-body">');
		this.container.append(this.body);


		//set Facts frame
		this.frame.facts = $('<div></div>');
		this.frame.facts.append($(this.contents.facts));

		this.body.append($(this.frame.facts));

		//set Cultural frame
		this.frame.cultural = $('<div></div>');
		this.frame.cultural.append($(this.contents.cultural));

		this.body.append($(this.frame.cultural));

		this.frame.cultural.hide();
		this.frame.facts.hide();

		//set footer 
		this.footer = $('<div class="modal-footer">');
		this.footer.append($(this.contents.footer));

		this.container.append(this.footer);

		//handle click events on tabs
		var object = this;

		$('.tab', this.header).click(function() {
			var classes = $(this).attr('class').split(' ');
			$.each(classes, function(index, value) {
				if (value != 'tab' && value != 'active'  && value != 'btn' && value != 'btn-default' && value != 'btn-sm') {
					object.selectContent(value);
				}
			});
		});
    },
	selectContent: function(content)
	{
		console.log(content);
		$('.tab', this.header).removeClass('active');
		$('.tab.'+content, this.header).addClass('active');

		this.frame.cultural.hide();
		this.frame.facts.hide();
		this.frame[content].show();
	},
	show: function()
	{
		this.overlay.modal('show');
	},
	hide: function()
	{
		this.overlay.modal('hide');
	},
};


//Statics methods
/*
User.login = function(email, password, callback)
{ 
}
*/
