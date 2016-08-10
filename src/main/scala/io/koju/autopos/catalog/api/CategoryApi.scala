package io.koju.autopos.catalog.api

import io.koju.autopos.catalog.repo.CategoryRepo
import io.koju.autopos.kernel.api.BaseApi
import org.springframework.web.bind.annotation._

@RestController
@RequestMapping(value = Array("/api/categories"))
class CategoryApi(categoryRepo: CategoryRepo)
  extends BaseApi(categoryRepo) {
}
