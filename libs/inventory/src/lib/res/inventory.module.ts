import { Module } from '@nestjs/common';

import { AchievementModule } from './achievement';
import { AddressModule } from './address';
import { CategoryModule } from './category';
import { ContactModule } from './contact';
import { CustomerModule } from './customer';
import { CustomerAddresssModule } from './customer-addresss';
import { CustomerEmailModule } from './customer-email';
import { CustomerPhoneModule } from './customer-phone';
import { DepartmentModule } from './department';
import { DiscountModule } from './discount';
import { EmailModule } from './email';
import { ExperienceModule } from './experience';
import { FeatureModule } from './feature';
import { OrderModule } from './order';
import { OrderItemModule } from './order-item';
import { PermissionModule } from './permission';
import { PhoneModule } from './phone';
import { PriceModule } from './price';
import { PriceLevelModule } from './price-level';
import { ProductModule } from './product';
import { ProductImageModule } from './product-image';
import { ProfileImageModule } from './profile-image';
import { QuantityModule } from './quantity';
import { RoleModule } from './role';
import { ShippingAddressModule } from './shipping-address';
import { SkillModule } from './skill';
import { SkuModule } from './sku';
import { SocialMediaModule } from './social-media';
import { StoreModule } from './store';
import { UserModule } from './user';

@Module({
  imports: [
    AchievementModule,
    AddressModule,
    CategoryModule,
    ContactModule,
    CustomerAddresssModule,
    CustomerEmailModule,
    CustomerModule,
    CustomerPhoneModule,
    DepartmentModule,
    DiscountModule,
    EmailModule,
    ExperienceModule,
    FeatureModule,
    OrderItemModule,
    OrderModule,
    PermissionModule,
    PhoneModule,
    PriceLevelModule,
    PriceModule,
    ProductImageModule,
    ProductModule,
    ProfileImageModule,
    QuantityModule,
    RoleModule,
    ShippingAddressModule,
    SkillModule,
    SkuModule,
    SocialMediaModule,
    StoreModule,
    UserModule,
  ],
})
export class InventoryModule {}
