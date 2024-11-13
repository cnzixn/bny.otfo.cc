# _plugins/search_json_generator.rb

require 'json'

module Jekyll
  class GenerateSearchJson < Jekyll::Generator
    safe true

    def generate(site)
      # 创建一个空数组，用于存放文章数据
      posts = []
      site_url = site.config['url']
      basedir = site.config['baseurl']

      # 获取所有文章并提取必要信息
      site.posts.each do |post|
        posts << {
          "title" => post.title,
          "url" => File.join(basedir, post.url),
          "date" => post.date.to_s,
          "content" => post.content # 包含完整的文章内容
        } 
      end

      # 将文章数据转换为 JSON 格式
      search_json = { "posts" => posts }

      # 输出到 search.json 文件
      # output_file = File.join(site.dest, "search.json")
      output_file = File.join(site.source, "assets/search.json")
      File.open(output_file, 'w') do |file|
        file.write(JSON.pretty_generate(search_json))
      end

      Jekyll.logger.info "Search JSON generated", "The search.json file has been created."
    end
  end
end