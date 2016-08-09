package io.koju.autopos.catalog.util

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@SpringBootTest
@ContextConfiguration
class ItemCodeSpecification extends Specification {

    @Autowired
    JdbcTemplate jdbcTemplate

    def "ItemCode decode and encode process is working and symmetric"() {

        expect:
        ItemCode.encode(id) == code

        and:
        ItemCode.decode().apply(code) == id

        where:
        id                   || code
        1L                   || 'K'
        2L                   || 'M'
        1000L                || 'KYR'
        23132L               || 'KRES'
        5635254252L          || 'KPGYMFCC'
        99427982344L         || 'XRNSKRXR'
        9223372036854775807L || 'TCWHHMFDCBX3XH'
    }

    def "ItemCode.encode is consistent with item_code function in DB"() {

        expect:
        ItemCode.encode(id) == jdbcTemplate.queryForObject("SELECT item_code(?);", String, id)

        where:
        id                   | _
        1L                   | _
        22L                  | _
        1000L                | _
        10272L               | _
        231132L              | _
        5635254252L          | _
        994272982344L        | _
        9223372036854775807L | _

    }

}