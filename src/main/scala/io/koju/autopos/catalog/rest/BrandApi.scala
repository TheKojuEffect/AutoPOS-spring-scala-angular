package io.koju.autopos.catalog.rest


import javax.validation.Valid

import io.koju.autopos.catalog.domain.Brand
import io.koju.autopos.catalog.service.BrandRepo
import org.springframework.http.HttpStatus.{CREATED, NOT_FOUND, NO_CONTENT, OK}
import org.springframework.http.{MediaType, ResponseEntity}
import org.springframework.web.bind.annotation.RequestMethod.{DELETE, GET, POST, PUT}
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
  def saveBrand(@RequestBody @Valid brand: Brand) = {
    brandRepo.save(brand)
    new ResponseEntity(CREATED)
  }

  @RequestMapping(value = Array("/{id}"), method = Array(PUT))
  def updateBrand(@PathVariable("id") id: Long, @RequestBody @Valid brand: Brand) = {
    brand.setId(id)
    brandRepo.save(brand)
    new ResponseEntity(OK)
  }

  @RequestMapping(value = Array("/{id}"), method = Array(DELETE))
  def deleteBrand(@PathVariable("id") id: Long) = {
    brandRepo.delete(id)
    new ResponseEntity(NO_CONTENT)
  }

}
