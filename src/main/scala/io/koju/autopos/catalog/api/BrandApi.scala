package io.koju.autopos.catalog.api


import io.koju.autopos.catalog.repo.BrandRepo
import io.koju.autopos.kernel.api.BaseApi
import org.springframework.web.bind.annotation._

@RestController
@RequestMapping(value = Array("/api/brands"))
class BrandApi(private val brandRepo: BrandRepo)
  extends BaseApi(brandRepo) {
}
