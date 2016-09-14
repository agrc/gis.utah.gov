# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['github']['build_revision'] = ENV['COMMIT_REF']
    end

  end

end
