package io.koju.autopos.catalog.service

import io.koju.autopos.catalog.domain.Brand
import org.springframework.data.jpa.repository.JpaRepository
import java.lang.Long

trait BrandRepo extends JpaRepository[Brand, Long] {
}
