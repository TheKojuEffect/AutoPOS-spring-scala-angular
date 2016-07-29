package io.koju.autopos.catalog.rest


import io.koju.autopos.catalog.domain.Brand
import io.koju.autopos.catalog.service.BrandRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMethod.{GET, POST}
import org.springframework.web.bind.annotation.{PathVariable, RequestMapping}

@Controller
@RequestMapping(Array("/api/brands"))
class BrandApi @Autowired()(private val brandRepository: BrandRepo) {

  @RequestMapping(value = Array("/{id}"), method = Array(GET))
  def getBrand(@PathVariable("id") id: Long) =
    brandRepository.getOne(id)

  @RequestMapping(method = Array(POST))
  def saveBrand(brand: Brand) =
    brandRepository.save(brand)

}
