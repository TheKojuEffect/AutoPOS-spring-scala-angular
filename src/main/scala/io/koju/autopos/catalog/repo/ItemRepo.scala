package io.koju.autopos.catalog.repo

import io.koju.autopos.catalog.domain.Item
import io.koju.autopos.kernel.repo.AuditableBaseRepo

trait ItemRepo extends AuditableBaseRepo[Item] {
}
