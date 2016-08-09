package io.koju.autopos

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.web.servlet.config.annotation.{CorsRegistry, WebMvcConfigurer, WebMvcConfigurerAdapter}

object Application extends App {
  SpringApplication.run(classOf[Application])
}


@EnableJpaAuditing
@SpringBootApplication
class Application {

  @Bean
  def corsConfigurer(): WebMvcConfigurer = {
    new WebMvcConfigurerAdapter() {
      override def addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/api/**").allowedMethods("GET", "POST", "PUT", "DELETE")
      }
    }
  }
}