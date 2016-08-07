package io.koju.autopos.catalog.api

import javax.validation.Valid

import io.koju.autopos.catalog.domain.Category
import io.koju.autopos.catalog.repo.CategoryRepo
import org.springframework.http.HttpStatus._
import org.springframework.http.{MediaType, ResponseEntity}
import org.springframework.web.bind.annotation._

@RestController
@RequestMapping(value = Array("/api/categories"),
  consumes = Array(MediaType.APPLICATION_JSON_VALUE),
  produces = Array(MediaType.APPLICATION_JSON_VALUE)
)
class CategoryApi(private val categoryRepo: CategoryRepo) {

  @GetMapping(value = Array("/{id}"))
  def getCategory(@PathVariable("id") id: Long) =
    Option(categoryRepo.findOne(id)) match {
      case Some(category) => new ResponseEntity(category, OK)
      case None => new ResponseEntity(NOT_FOUND)
    }

  @PostMapping
  def saveCategory(@RequestBody @Valid category: Category) = {
    categoryRepo.save(category)
    new ResponseEntity(CREATED)
  }

  @PutMapping(value = Array("/{id}"))
  def updateCategory(@PathVariable("id") id: Long, @RequestBody @Valid category: Category) = {
    category.setId(id)
    categoryRepo.save(category)
    new ResponseEntity(OK)
  }

  @DeleteMapping(value = Array("/{id}"))
  def deleteCategory(@PathVariable("id") id: Long) = {
    categoryRepo.delete(id)
    new ResponseEntity(NO_CONTENT)
  }

}
