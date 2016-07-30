package io.koju.autopos.catalog.service

import java.lang.Long

import io.koju.autopos.catalog.domain.Brand
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QueryDslPredicateExecutor

trait BrandRepo extends JpaRepository[Brand, Long]
  with QueryDslPredicateExecutor[Brand] {
}
