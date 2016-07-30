package io.koju.autopos.catalog.rest


import io.koju.autopos.catalog.domain.Brand
import io.koju.autopos.catalog.service.BrandRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestMethod.{GET, POST}
import org.springframework.web.bind.annotation._

@RestController
@RequestMapping(value = Array("/api/brands"),
  consumes = Array(MediaType.APPLICATION_JSON_VALUE),
  produces = Array(MediaType.APPLICATION_JSON_VALUE)
)
class BrandApi @Autowired()(private val brandRepository: BrandRepo) {

  @RequestMapping(value = Array("/{id}"), method = Array(GET))
  def getBrand(@PathVariable("id") brand: Brand) = brand

  @RequestMapping(method = Array(POST))
  def saveBrand(@RequestBody brand: Brand) =
    brandRepository.save(brand)

}
