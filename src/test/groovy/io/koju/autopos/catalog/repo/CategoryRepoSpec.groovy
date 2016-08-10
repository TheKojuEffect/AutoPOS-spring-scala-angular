package io.koju.autopos.catalog.repo

import io.koju.autopos.catalog.domain.Category
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@DataJpaTest
@ContextConfiguration
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CategoryRepoSpec extends Specification {

    @Autowired
    CategoryRepo categoryRepo

    def "short name is capitalized while saving and updating"() {

        given: "A category with lowercase short name"
        def category = new Category()
        category.shortName = "mn"
        category.name = "Mahindra Nissan"

        when: "category is saved"
        categoryRepo.save(category)

        then: "short name is capitalized"
        category.id != null
        category.shortName == "MN"

        when: "short name is updated to lower case and updated"
        category.shortName = "an"
        categoryRepo.save(category)
        categoryRepo.flush()

        then: "short name should be capitalized"
        category.shortName == "AN"
    }
}

