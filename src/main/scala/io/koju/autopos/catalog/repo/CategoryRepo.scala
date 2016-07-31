package io.koju.autopos.catalog.repo

import io.koju.autopos.catalog.domain.Category
import io.koju.autopos.kernel.repo.AuditableBaseRepo

trait CategoryRepo
  extends AuditableBaseRepo[Category] {

}
