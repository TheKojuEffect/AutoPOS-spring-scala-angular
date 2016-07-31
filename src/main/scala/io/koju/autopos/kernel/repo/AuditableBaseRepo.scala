package io.koju.autopos.kernel.repo

import java.lang.Long

import io.koju.autopos.kernel.domain.AuditableBaseEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QueryDslPredicateExecutor
import org.springframework.data.repository.NoRepositoryBean

@NoRepositoryBean
trait AuditableBaseRepo[T <: AuditableBaseEntity]
  extends JpaRepository[T, Long]
    with QueryDslPredicateExecutor[T] {

}
