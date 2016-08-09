package io.koju.autopos.catalog.domain

import java.lang.Long
import javax.persistence.GenerationType.SEQUENCE
import javax.persistence._
import javax.validation.constraints.{Min, NotNull, Size}

import io.koju.autopos.kernel.domain.AuditableBaseEntity
import org.hibernate.annotations.{Generated, GenerationTime}

import scala.beans.BeanProperty

@Entity
@Table(name = "item")
class Item extends AuditableBaseEntity {

  @Id
  @SequenceGenerator(name = "item_id_seq", sequenceName = "item_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = SEQUENCE, generator = "item_id_seq")
  @BeanProperty
  var id: Long = _

  @Column(name = "code", length = 14, nullable = false, insertable = false, updatable = false)
  @Generated(GenerationTime.INSERT)
  @BeanProperty
  var code: String = _

  @NotNull
  @Size(min = 2, max = 50)
  @Column(name = "name", length = 50, nullable = false)
  @BeanProperty
  var name: String = _

  @Size(max = 250)
  @Column(name = "description", length = 250)
  @BeanProperty
  var description: String = _

  @Size(max = 250)
  @Column(name = "location", length = 250)
  @BeanProperty
  var location: String = _

  @Min(0)
  @Column(name = "quantity", nullable = false)
  @BeanProperty
  var quantity: Integer = _

  @Size(max = 250)
  @Column(name = "remarks", length = 250)
  @BeanProperty
  var remarks: String = _

  @NotNull
  @Min(0)
  @Column(name = "marked_price", precision = 10, scale = 2, nullable = false)
  @BeanProperty
  var markedPrice: BigDecimal = _

  @ManyToOne
  @JoinColumn(name = "category_id")
  @BeanProperty
  var category: Category = _

  @ManyToOne
  @JoinColumn(name = "brand_id")
  @BeanProperty
  var brand: Brand = _

}
