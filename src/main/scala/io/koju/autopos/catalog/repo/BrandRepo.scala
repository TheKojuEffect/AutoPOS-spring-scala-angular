package io.koju.autopos.catalog.repo

import io.koju.autopos.catalog.domain.Brand
import io.koju.autopos.kernel.repo.AuditableBaseRepo

trait BrandRepo
  extends AuditableBaseRepo[Brand] {
}
