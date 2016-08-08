package io.koju.autopos.catalog.domain

import java.lang.Long
import javax.persistence._
import javax.validation.constraints.{NotNull, Size}

import io.koju.autopos.kernel.domain.AuditableBaseEntity

import scala.beans.BeanProperty

@Entity
@Table(name = "brand")
class Brand extends AuditableBaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "brand_id_seq")
  @SequenceGenerator(name = "brand_id_seq", sequenceName = "brand_id_seq", allocationSize = 1)
  @BeanProperty
  var id: Long = _


  @NotNull
  @Size(min = 2, max = 50)
  @Column(name = "name", length = 50, nullable = false)
  @BeanProperty
  var name: String = _

}
