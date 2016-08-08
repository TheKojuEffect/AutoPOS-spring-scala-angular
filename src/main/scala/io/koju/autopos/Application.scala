package io.koju.autopos

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.web.cors.{CorsConfiguration, UrlBasedCorsConfigurationSource}
import org.springframework.web.filter.CorsFilter

object Application extends App {
  SpringApplication.run(classOf[Application])
}


@EnableJpaAuditing
@SpringBootApplication
class Application {

  @Bean
  def corsFilter(): FilterRegistrationBean = {
    val source = new UrlBasedCorsConfigurationSource
    val config = new CorsConfiguration
    config.setAllowCredentials(true)
    config.addAllowedOrigin("http://localhost:5555")
    config.addAllowedHeader("*")
    config.addAllowedMethod("*")
    source.registerCorsConfiguration("/**", config)
    val bean = new FilterRegistrationBean(new CorsFilter(source))
    bean.setOrder(0)
    bean
  }
}