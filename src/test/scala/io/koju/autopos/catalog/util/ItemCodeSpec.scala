package io.koju.autopos.catalog.util

import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner
import org.scalatest.prop.TableDrivenPropertyChecks
import org.scalatest.{FlatSpec, Matchers}

@RunWith(classOf[JUnitRunner])
class ItemCodeSpec extends FlatSpec with TableDrivenPropertyChecks with Matchers {

  "ItemCode encode/decode" should "be symmetric" in {
    val idCodes =
      Table(
        ("id", "code"),
        (1L, "K"),
        (2L, "M"),
        (1000L, "KYR"),
        (23132L, "KRES"),
        (5635254252L, "KPGYMFCC"),
        (99427982344L, "XRNSKRXR"),
        (9223372036854775807L, "TCWHHMFDCBX3XH")
      )

    forAll(idCodes) { (id: Long, code: String) =>
      ItemCode(id) should equal(code)
      ItemCode(code) should equal(id)
    }
  }
}
