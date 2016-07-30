package io.koju.autopos

import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@SpringBootTest
@ContextConfiguration
class ApplicationSpec extends Specification {

    def "context loads"() {
        expect: true
    }
}
