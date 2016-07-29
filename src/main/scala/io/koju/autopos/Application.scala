package io.koju.autopos

import io.koju.autopos.config.AppConfig
import org.springframework.boot.SpringApplication

object Application extends App {
  SpringApplication.run(classOf[AppConfig])
}
