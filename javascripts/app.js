(function() {
  var StoryCanvas, StoryImage;

  StoryCanvas = (function() {
    function StoryCanvas() {
      var _imgName;
      _imgName = $('#storyImage').val();
      this.canvas = document.getElementById('myCanvas');
      this.cxt = this.canvas.getContext('2d');
      this.img = images[_imgName] || new StoryImage(_imgName);
      this.img.onReady().then((function(_this) {
        return function() {
          return _this.render().addTitle().addMessage().addInfo().output();
        };
      })(this));
      return this;
    }

    StoryCanvas.prototype.render = function() {
      this.cxt.fillStyle = '#000';
      this.cxt.drawImage(this.img, 0, 0);
      return this;
    };

    StoryCanvas.prototype.addTitle = function() {
      this.cxt.font = 'bold 26px Arial';
      this.cxt.textAlign = 'center';
      this.cxt.textBaseline = 'top';
      this.cxt.fillText($('#title').val(), 250, 26);
      return this;
    };

    StoryCanvas.prototype.addMessage = function() {
      this.cxt.font = 'bold 16px Arial';
      this.cxt.textAlign = 'left';
      this.cxt.textBaseline = 'top';
      this.cxt.fillText($('#msg1').val(), 20, 115, 160);
      this.cxt.fillText($('#msg2').val(), 310, 236, 160);
      this.cxt.fillText($('#msg3').val(), 20, 404, 160);
      this.cxt.fillText($('#msg4').val(), 310, 536, 160);
      return this;
    };

    StoryCanvas.prototype.addInfo = function() {
      this.cxt.font = '12px Arial';
      this.cxt.textAlign = 'left';
      this.cxt.textBaseline = 'top';
      this.cxt.fillText('Fandora 怪獸大暴走', 0, 650);
      this.cxt.fillText('http://shop.fandora.tw/story-generator', 0, 665);
      return this;
    };

    StoryCanvas.prototype.output = function() {
      var output;
      output = document.getElementById('imgOut');
      output.src = this.canvas.toDataURL();
      return this;
    };

    return StoryCanvas;

  })();

  StoryImage = (function() {
    function StoryImage(name) {
      var defer, image;
      this.name = name;
      defer = new jQuery.Deferred();
      image = new Image();
      image.src = "/apps/story-generator/" + name + ".jpg";
      image.onload = function() {
        return defer.resolve();
      };
      image.onReady = function() {
        return defer.promise();
      };
      return image;
    }

    return StoryImage;

  })();

}).call(this);

//# sourceMappingURL=app.js.map
