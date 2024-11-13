require 'htmlcompressor'
require 'find'
require 'json'

# 初始化压缩器
html_compressor = HtmlCompressor::Compressor.new(
  remove_comments: true,
  remove_multi_spaces: true,
  remove_intertag_spaces: true
)

Jekyll::Hooks.register :site, :post_write do |site|
  # 遍历 _site 目录下的所有 HTML、JSON 和 JS 文件
  Find.find(site.dest) do |path|
    if path.end_with?('.html')
      # 压缩 HTML 文件
      puts "Compressing HTML: #{path}"
      content = File.read(path)
      compressed_content = html_compressor.compress(content)
      File.write(path, compressed_content)

    elsif path.end_with?('.json')
      # 压缩 JSON 文件
      puts "Compressing JSON: #{path}"
      content = File.read(path)
      json_data = JSON.parse(content)
      compressed_content = JSON.generate(json_data)
      File.write(path, compressed_content)

    end
  end
end