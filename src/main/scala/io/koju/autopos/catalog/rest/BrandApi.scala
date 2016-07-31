package io.koju.autopos.catalog.rest


import io.koju.autopos.catalog.domain.Brand
import io.koju.autopos.catalog.service.BrandRepo
import org.springframework.http.HttpStatus.{NOT_FOUND, OK}
import org.springframework.http.{MediaType, ResponseEntity}
import org.springframework.web.bind.annotation.RequestMethod.{GET, POST}
import org.springframework.web.bind.annotation._

@RestController
@RequestMapping(value = Array("/api/brands"),
  consumes = Array(MediaType.APPLICATION_JSON_VALUE),
  produces = Array(MediaType.APPLICATION_JSON_VALUE)
)
class BrandApi(private val brandRepo: BrandRepo) {

  @RequestMapping(value = Array("/{id}"), method = Array(GET))
  def getBrand(@PathVariable("id") id: Long) =
    Option(brandRepo.findOne(id)) match {
      case Some(brand) => new ResponseEntity(brand, OK)
      case None => new ResponseEntity(NOT_FOUND)
    }

  @RequestMapping(method = Array(POST))
  def saveBrand(@RequestBody brand: Brand) =
    brandRepo.save(brand)

}
