package io.koju.autopos.catalog.domain

import javax.persistence._
import javax.validation.constraints.{NotNull, Size}

import scala.beans.BeanProperty

@Entity
@Table(name = "brand")
class Brand {

  @Id
  @GeneratedValue
  @BeanProperty
  var id: Long = _

  @NotNull
  @Size(min = 2, max = 50)
  @Column(name = "name", length = 50, nullable = false)
  @BeanProperty
  var name: String = _

}
