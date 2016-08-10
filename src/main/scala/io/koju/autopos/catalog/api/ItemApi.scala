package io.koju.autopos.catalog.api

import io.koju.autopos.catalog.domain.Item
import io.koju.autopos.catalog.repo.ItemRepo
import io.koju.autopos.kernel.api.BaseApi
import org.springframework.web.bind.annotation.{RequestMapping, RestController}

@RestController
@RequestMapping(value = Array("/api/items"))
class ItemApi(itemRepo: ItemRepo)
  extends BaseApi[Item](itemRepo) {

}
