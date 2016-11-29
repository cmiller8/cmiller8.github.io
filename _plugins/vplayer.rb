#module Jekyll

  # class BmwVideoPlayer < Liquid::Block
  #   def initialize(tag_name, text, tokens)
  #     super
  #     @vpath = text
  #   end
  #
  #   def render(context)
  #     ret = "<div class='embed video'>
  #       <video controls='controls' >
  #         <source src='#{@vpath}' type='video/mp4' />
  #         <source src='#{site.config.cdn_path}/video/#{@vpath}' type='video/mp4' />
  #       </video>
  #     </div>"
  #     ret
  #   end
  # end
#end
# Liquid::Template.register_tag('bmwvplayer', Jekyll::BmwVideoPlayer)

module Jekyll
  class BmwVideoPlayer < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      vpath = context[@text] || @text
      cdn_path = context["site.cdn_path"]
      ret = "<div class='embed video'>
        <video controls='controls' >
          <source src='#{cdn_path}/video/#{vpath}' type='video/mp4' />
          <source src='#{vpath}' type='video/mp4' />
        </video>
      </div>"
      ret
    end
  end
end

Liquid::Template.register_tag('bmw_video_player', Jekyll::BmwVideoPlayer)
