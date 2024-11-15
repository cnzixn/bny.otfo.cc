# _plugins/short_link_generator.rb
module Jekyll
  class ShortLinkGenerator < Generator
    priority :low

    def generate(site)
      site_url = site.config['url']
      basedir = site.config['baseurl']
      site.posts.docs.each do |post|

        # 如果文章已设置 short_code，使用它
        if post.data["short_url_code"]
          short_code = post.data['short_url_code']  # 使用 short_url_code 字段的值作为短链接的最后部分
        else
          # 否则自动生成 short_code（使用文章的唯一 ID 或其他生成规则）
          file_name = post.basename
          # short_code = post.id.hash.abs.to_s(36)[0, 5].downcase  # 生成一个5字符的短链接
          # short_code = post.basename.hash.abs.to_s(36)[0, 5].downcase  # 生成一个5字符的短链接
          short_code = "a" + Digest::MD5.hexdigest(file_name)[0, 5].downcase
        end
        post.data["short_url"] = "#{site.config['url']}/s/#{short_code}" # 原文章保存完整短链接


        # 中转页面：为每个短链接路径生成一个 HTML 文件
        page = Jekyll::Page.new(site, site.source, "", "s/#{short_code}/index.html")
        page.data["layout"] = "short"  # 确保使用重定向布局
        page.data["source_url"] = File.join(site_url, basedir, post.url)  # 设置原文章的 URL
        site.pages << page  # 将生成的页面添加到 site.pages 中
      end
    end
  end
end

