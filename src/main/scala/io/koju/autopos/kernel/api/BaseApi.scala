package io.koju.autopos.kernel.api

import javax.validation.Valid

import io.koju.autopos.kernel.domain.AuditableBaseEntity
import io.koju.autopos.kernel.repo.AuditableBaseRepo
import org.springframework.http.HttpStatus._
import org.springframework.http.{MediaType, ResponseEntity}
import org.springframework.util.Assert
import org.springframework.web.bind.annotation._

@RequestMapping(
  consumes = Array(MediaType.APPLICATION_JSON_VALUE),
  produces = Array(MediaType.APPLICATION_JSON_VALUE)
)
abstract class BaseApi[T <: AuditableBaseEntity](protected val repo: AuditableBaseRepo[T]) {

  @GetMapping
  def getAll = repo.findAll

  @GetMapping(value = Array("/{id}"))
  def get(@PathVariable("id") id: Long) =
    Option(repo.findOne(id)) match {
      case Some(entity) => new ResponseEntity(entity, OK)
      case None => new ResponseEntity(NOT_FOUND)
    }

  @PostMapping
  def save(@RequestBody @Valid entity: T) = {
    repo.save(entity)
    new ResponseEntity(entity, CREATED)
  }

  @PutMapping(value = Array("/{id}"))
  def update(@PathVariable("id") id: Long, @RequestBody @Valid entity: T) = {

    Assert.isTrue(entity.getId == id)

    repo.save(entity)
    new ResponseEntity(entity, OK)
  }

  @DeleteMapping(value = Array("/{id}"))
  def delete(@PathVariable("id") id: Long) = {
    repo.delete(id)
    new ResponseEntity(NO_CONTENT)
  }
}
