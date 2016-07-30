package io.koju.autopos

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

object Application extends App {
  SpringApplication.run(classOf[Application])
}


@EnableJpaAuditing
@SpringBootApplication
class Application