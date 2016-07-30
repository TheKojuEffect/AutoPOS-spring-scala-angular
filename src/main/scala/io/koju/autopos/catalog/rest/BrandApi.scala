package io.koju.autopos.catalog.rest


import io.koju.autopos.catalog.domain.{Brand, QBrand}
import io.koju.autopos.catalog.service.BrandRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.{HttpStatus, MediaType, ResponseEntity}
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMethod.{GET, POST}
import org.springframework.web.bind.annotation.{PathVariable, RequestBody, RequestMapping}

@Controller
@RequestMapping(value = Array("/api/brands"),
  consumes = Array(MediaType.APPLICATION_JSON_VALUE),
  produces = Array(MediaType.APPLICATION_JSON_VALUE)
)
class BrandApi @Autowired()(private val brandRepository: BrandRepo) {

  @RequestMapping(value = Array("/{id}"), method = Array(GET))
  def getBrand(@PathVariable("id") id: Long) = {
    val brand = brandRepository.findOne(id)
    new ResponseEntity[Brand](brand, HttpStatus.OK)
  }

  @RequestMapping(method = Array(POST))
  def saveBrand(@RequestBody brand: Brand) =
    brandRepository.save(brand)

}
